
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNotebookHeartOutline from "../../src/components/MdiNotebookHeartOutline.vue";

test("MdiNotebookHeartOutline snapshot", () => {
  const wrapper = mount(MdiNotebookHeartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
