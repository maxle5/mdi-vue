
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerPlus from "../../src/components/MdiBeakerPlus.vue";

test("MdiBeakerPlus snapshot", () => {
  const wrapper = mount(MdiBeakerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
