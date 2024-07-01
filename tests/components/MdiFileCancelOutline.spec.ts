
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCancelOutline from "../../src/components/MdiFileCancelOutline.vue";

test("MdiFileCancelOutline snapshot", () => {
  const wrapper = mount(MdiFileCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
