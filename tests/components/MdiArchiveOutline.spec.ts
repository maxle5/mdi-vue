
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveOutline from "../../src/components/MdiArchiveOutline.vue";

test("MdiArchiveOutline snapshot", () => {
  const wrapper = mount(MdiArchiveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
