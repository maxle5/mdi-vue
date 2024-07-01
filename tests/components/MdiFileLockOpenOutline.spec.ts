
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLockOpenOutline from "../../src/components/MdiFileLockOpenOutline.vue";

test("MdiFileLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiFileLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
