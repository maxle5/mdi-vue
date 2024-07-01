
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPi from "../../src/components/MdiPi.vue";

test("MdiPi snapshot", () => {
  const wrapper = mount(MdiPi, {});
  expect(wrapper.html()).toMatchSnapshot();
});
