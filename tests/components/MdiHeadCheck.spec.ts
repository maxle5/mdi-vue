
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadCheck from "../../src/components/MdiHeadCheck.vue";

test("MdiHeadCheck snapshot", () => {
  const wrapper = mount(MdiHeadCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
