
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeOutline from "../../src/components/MdiHomeOutline.vue";

test("MdiHomeOutline snapshot", () => {
  const wrapper = mount(MdiHomeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
