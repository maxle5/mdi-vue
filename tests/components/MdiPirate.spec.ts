
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPirate from "../../src/components/MdiPirate.vue";

test("MdiPirate snapshot", () => {
  const wrapper = mount(MdiPirate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
