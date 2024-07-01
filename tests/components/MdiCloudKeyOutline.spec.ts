
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudKeyOutline from "../../src/components/MdiCloudKeyOutline.vue";

test("MdiCloudKeyOutline snapshot", () => {
  const wrapper = mount(MdiCloudKeyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
