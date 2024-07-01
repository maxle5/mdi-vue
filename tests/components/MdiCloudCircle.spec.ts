
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCircle from "../../src/components/MdiCloudCircle.vue";

test("MdiCloudCircle snapshot", () => {
  const wrapper = mount(MdiCloudCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
