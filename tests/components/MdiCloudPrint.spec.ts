
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPrint from "../../src/components/MdiCloudPrint.vue";

test("MdiCloudPrint snapshot", () => {
  const wrapper = mount(MdiCloudPrint, {});
  expect(wrapper.html()).toMatchSnapshot();
});
