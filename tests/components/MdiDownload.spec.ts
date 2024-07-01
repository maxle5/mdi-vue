
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownload from "../../src/components/MdiDownload.vue";

test("MdiDownload snapshot", () => {
  const wrapper = mount(MdiDownload, {});
  expect(wrapper.html()).toMatchSnapshot();
});
