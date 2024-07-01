
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStoolOutline from "../../src/components/MdiStoolOutline.vue";

test("MdiStoolOutline snapshot", () => {
  const wrapper = mount(MdiStoolOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
