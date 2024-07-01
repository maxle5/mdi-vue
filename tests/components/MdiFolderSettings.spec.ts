
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderSettings from "../../src/components/MdiFolderSettings.vue";

test("MdiFolderSettings snapshot", () => {
  const wrapper = mount(MdiFolderSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
