
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveLockOutline from "../../src/components/MdiArchiveLockOutline.vue";

test("MdiArchiveLockOutline snapshot", () => {
  const wrapper = mount(MdiArchiveLockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
