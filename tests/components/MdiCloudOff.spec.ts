
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudOff from "../../src/components/MdiCloudOff.vue";

test("MdiCloudOff snapshot", () => {
  const wrapper = mount(MdiCloudOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
