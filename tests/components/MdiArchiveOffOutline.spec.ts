
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveOffOutline from "../../src/components/MdiArchiveOffOutline.vue";

test("MdiArchiveOffOutline snapshot", () => {
  const wrapper = mount(MdiArchiveOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
