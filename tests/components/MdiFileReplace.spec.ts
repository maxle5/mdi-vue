
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileReplace from "../../src/components/MdiFileReplace.vue";

test("MdiFileReplace snapshot", () => {
  const wrapper = mount(MdiFileReplace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
