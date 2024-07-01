
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewColumnOutline from "../../src/components/MdiViewColumnOutline.vue";

test("MdiViewColumnOutline snapshot", () => {
  const wrapper = mount(MdiViewColumnOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
