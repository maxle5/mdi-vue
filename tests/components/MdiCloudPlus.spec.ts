
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPlus from "../../src/components/MdiCloudPlus.vue";

test("MdiCloudPlus snapshot", () => {
  const wrapper = mount(MdiCloudPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
