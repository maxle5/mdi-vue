
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPower from "../../src/components/MdiPower.vue";

test("MdiPower snapshot", () => {
  const wrapper = mount(MdiPower, {});
  expect(wrapper.html()).toMatchSnapshot();
});
