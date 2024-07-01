
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCogOutline from "../../src/components/MdiArchiveCogOutline.vue";

test("MdiArchiveCogOutline snapshot", () => {
  const wrapper = mount(MdiArchiveCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
