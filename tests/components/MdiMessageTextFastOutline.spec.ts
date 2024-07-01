
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageTextFastOutline from "../../src/components/MdiMessageTextFastOutline.vue";

test("MdiMessageTextFastOutline snapshot", () => {
  const wrapper = mount(MdiMessageTextFastOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
