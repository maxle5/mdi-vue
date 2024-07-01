
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveOff from "../../src/components/MdiArchiveOff.vue";

test("MdiArchiveOff snapshot", () => {
  const wrapper = mount(MdiArchiveOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
