
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileLockOpen from "../../src/components/MdiFileLockOpen.vue";

test("MdiFileLockOpen snapshot", () => {
  const wrapper = mount(MdiFileLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
