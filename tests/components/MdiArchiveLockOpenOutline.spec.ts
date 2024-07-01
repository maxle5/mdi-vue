
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveLockOpenOutline from "../../src/components/MdiArchiveLockOpenOutline.vue";

test("MdiArchiveLockOpenOutline snapshot", () => {
  const wrapper = mount(MdiArchiveLockOpenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
