
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveLockOpen from "../../src/components/MdiArchiveLockOpen.vue";

test("MdiArchiveLockOpen snapshot", () => {
  const wrapper = mount(MdiArchiveLockOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
