
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAutoUpload from "../../src/components/MdiAutoUpload.vue";

test("MdiAutoUpload snapshot", () => {
  const wrapper = mount(MdiAutoUpload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
