
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPurseOutline from "../../src/components/MdiPurseOutline.vue";

test("MdiPurseOutline snapshot", () => {
  const wrapper = mount(MdiPurseOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
