
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPot from "../../src/components/MdiPot.vue";

test("MdiPot snapshot", () => {
  const wrapper = mount(MdiPot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
