
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveEditOutline from "../../src/components/MdiArchiveEditOutline.vue";

test("MdiArchiveEditOutline snapshot", () => {
  const wrapper = mount(MdiArchiveEditOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
