
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNewspaperCheck from "../../src/components/MdiNewspaperCheck.vue";

test("MdiNewspaperCheck snapshot", () => {
  const wrapper = mount(MdiNewspaperCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
