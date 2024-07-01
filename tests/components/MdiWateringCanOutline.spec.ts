
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWateringCanOutline from "../../src/components/MdiWateringCanOutline.vue";

test("MdiWateringCanOutline snapshot", () => {
  const wrapper = mount(MdiWateringCanOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
