
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileUpload from "../../src/components/MdiFileUpload.vue";

test("MdiFileUpload snapshot", () => {
  const wrapper = mount(MdiFileUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
