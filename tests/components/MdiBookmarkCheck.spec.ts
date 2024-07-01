
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkCheck from "../../src/components/MdiBookmarkCheck.vue";

test("MdiBookmarkCheck snapshot", () => {
  const wrapper = mount(MdiBookmarkCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
