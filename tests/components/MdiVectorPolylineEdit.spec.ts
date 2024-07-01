
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVectorPolylineEdit from "../../src/components/MdiVectorPolylineEdit.vue";

test("MdiVectorPolylineEdit snapshot", () => {
  const wrapper = mount(MdiVectorPolylineEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
