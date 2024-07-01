
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUpload from "../../src/components/MdiUpload.vue";

test("MdiUpload snapshot", () => {
  const wrapper = mount(MdiUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
