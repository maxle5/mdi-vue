
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCancelOutline from "../../src/components/MdiArchiveCancelOutline.vue";

test("MdiArchiveCancelOutline snapshot", () => {
  const wrapper = mount(MdiArchiveCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
