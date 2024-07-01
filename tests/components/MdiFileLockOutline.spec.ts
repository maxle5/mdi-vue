
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLockOutline from "../../src/components/MdiFileLockOutline.vue";

test("MdiFileLockOutline snapshot", () => {
  const wrapper = mount(MdiFileLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
