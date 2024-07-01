
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveCancel from "../../src/components/MdiArchiveCancel.vue";

test("MdiArchiveCancel snapshot", () => {
  const wrapper = mount(MdiArchiveCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
