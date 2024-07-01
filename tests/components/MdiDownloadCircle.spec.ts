
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDownloadCircle from "../../src/components/MdiDownloadCircle.vue";

test("MdiDownloadCircle snapshot", () => {
  const wrapper = mount(MdiDownloadCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
