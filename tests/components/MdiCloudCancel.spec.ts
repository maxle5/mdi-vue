
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCancel from "../../src/components/MdiCloudCancel.vue";

test("MdiCloudCancel snapshot", () => {
  const wrapper = mount(MdiCloudCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
