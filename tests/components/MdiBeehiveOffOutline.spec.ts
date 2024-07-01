
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeehiveOffOutline from "../../src/components/MdiBeehiveOffOutline.vue";

test("MdiBeehiveOffOutline snapshot", () => {
  const wrapper = mount(MdiBeehiveOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
