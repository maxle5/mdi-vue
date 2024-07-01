
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorSquareEdit from "../../src/components/MdiVectorSquareEdit.vue";

test("MdiVectorSquareEdit snapshot", () => {
  const wrapper = mount(MdiVectorSquareEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
