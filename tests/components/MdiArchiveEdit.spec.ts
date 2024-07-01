
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArchiveEdit from "../../src/components/MdiArchiveEdit.vue";

test("MdiArchiveEdit snapshot", () => {
  const wrapper = mount(MdiArchiveEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
