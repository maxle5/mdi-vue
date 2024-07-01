
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveSearchOutline from "../../src/components/MdiArchiveSearchOutline.vue";

test("MdiArchiveSearchOutline snapshot", () => {
  const wrapper = mount(MdiArchiveSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
