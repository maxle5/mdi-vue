
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileFindOutline from "../../src/components/MdiFileFindOutline.vue";

test("MdiFileFindOutline snapshot", () => {
  const wrapper = mount(MdiFileFindOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
