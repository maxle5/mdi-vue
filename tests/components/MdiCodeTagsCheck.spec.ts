
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCodeTagsCheck from "../../src/components/MdiCodeTagsCheck.vue";

test("MdiCodeTagsCheck snapshot", () => {
  const wrapper = mount(MdiCodeTagsCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
