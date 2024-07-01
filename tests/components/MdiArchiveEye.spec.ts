
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveEye from "../../src/components/MdiArchiveEye.vue";

test("MdiArchiveEye snapshot", () => {
  const wrapper = mount(MdiArchiveEye, {});
  expect(wrapper.html()).toMatchSnapshot();
});
