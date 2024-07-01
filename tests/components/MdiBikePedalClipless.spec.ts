
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBikePedalClipless from "../../src/components/MdiBikePedalClipless.vue";

test("MdiBikePedalClipless snapshot", () => {
  const wrapper = mount(MdiBikePedalClipless, {});
  expect(wrapper.html()).toMatchSnapshot();
});
