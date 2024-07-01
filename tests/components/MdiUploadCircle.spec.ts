
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiUploadCircle from "../../src/components/MdiUploadCircle.vue";

test("MdiUploadCircle snapshot", () => {
  const wrapper = mount(MdiUploadCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
