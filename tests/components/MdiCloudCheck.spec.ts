
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCheck from "../../src/components/MdiCloudCheck.vue";

test("MdiCloudCheck snapshot", () => {
  const wrapper = mount(MdiCloudCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
